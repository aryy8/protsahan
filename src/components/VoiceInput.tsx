
import React, { useState, useRef } from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { processVoiceInput } from '@/lib/geminiAPI';
import { toast } from './ui/use-toast';

interface VoiceInputProps {
  fieldType: string;
  onResult: (text: string) => void;
  className?: string;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ fieldType, onResult, className }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setIsProcessing(true);
        try {
          const text = await processVoiceInput(audioBlob, fieldType);
          onResult(text);
          toast({
            title: "Voice input processed",
            description: "Your voice has been converted to text!",
          });
        } catch (error) {
          console.error('Error processing voice input:', error);
          toast({
            variant: "destructive",
            title: "Processing failed",
            description: "Failed to process voice input. Please try again.",
          });
        } finally {
          setIsProcessing(false);
        }

        // Stop all tracks in the stream
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      toast({
        title: "Recording started",
        description: "Speak now and click the button again when finished.",
      });
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast({
        variant: "destructive",
        title: "Microphone access denied",
        description: "Please allow microphone access to use voice input.",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <Button 
      type="button"
      variant={isRecording ? "destructive" : "outline"} 
      size="icon"
      className={className}
      onClick={toggleRecording}
      disabled={isProcessing}
      title={isRecording ? "Stop recording" : "Start voice input"}
    >
      {isProcessing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isRecording ? (
        <MicOff className="h-4 w-4" />
      ) : (
        <Mic className="h-4 w-4" />
      )}
    </Button>
  );
};

export default VoiceInput;
