import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyC1IQV3ydssrzR8Nbb9VLCTgV63KwaBjeU",
});

export async function getAIResponse(userMessage: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "reply under 150 words, do not use bold text, only respond with answer to this: " + userMessage,
    });

    return response.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Error fetching response. Please try again.";
  }
}

export async function getScholarshipRecommendations(
  userData: {
    fullName: string;
    email: string;
    studentId: string;
    education: string;
    fieldOfStudy: string;
    academicAchievements: string;
    financialNeed: string;
    extracurriculars: string;
  }
): Promise<any[]> {
  try {
    const prompt = `
      Based on the following student information, recommend suitable scholarships:
      Name: ${userData.fullName}
      Field of Study: ${userData.fieldOfStudy}
      Education Level: ${userData.education}
      Academic Achievements: ${userData.academicAchievements}
      Financial Need: ${userData.financialNeed}
      Extracurricular Activities: ${userData.extracurriculars}
      
      Return the response in the following JSON array format:
      [
        {
          "title": "Scholarship Title",
          "provider": "Provider Name",
          "amount": "Amount in INR",
          "eligibility": "Brief eligibility criteria",
          "matchScore": "Match percentage between 0-100"
        }
      ]
      
      Provide 3-5 scholarship recommendations that best match the student profile.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const responseText = response.text || "[]";
    
    try {
      // Remove any non-JSON content (sometimes AI adds explanations)
      const jsonStartIndex = responseText.indexOf('[');
      const jsonEndIndex = responseText.lastIndexOf(']') + 1;
      const jsonStr = responseText.substring(jsonStartIndex, jsonEndIndex);
      
      return JSON.parse(jsonStr);
    } catch (parseError) {
      console.error("Error parsing scholarship recommendations:", parseError);
      return [];
    }
  } catch (error) {
    console.error("Error fetching scholarship recommendations:", error);
    return [];
  }
}

export async function processVoiceInput(audioBlob: Blob, fieldType: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      // Use the Web Speech API for real speech recognition
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      
      // Create an audio element to play back the recording
      const audio = new Audio(URL.createObjectURL(audioBlob));
      
      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        console.log(`Speech recognized: ${speechResult}`);
        
        // Process text based on field type
        let processedText = speechResult;
        
        // Format the recognized text according to the field type
        switch (fieldType) {
          case 'email':
            // Remove spaces and convert to lowercase for email format
            processedText = speechResult.toLowerCase().replace(/\s+/g, '');
            if (!processedText.includes('@') && !processedText.includes('at')) {
              processedText += '@gmail.com'; // Add default domain if none mentioned
            } else {
              // Replace "at" with @ if needed
              processedText = processedText.replace(/\s+at\s+/i, '@');
            }
            break;
            
          case 'password':
          case 'confirmPassword':
            // For passwords, use the spoken text directly
            break;
            
          case 'education':
          case 'financialNeed':
            // Format as proper case for select fields
            processedText = speechResult.charAt(0).toUpperCase() + speechResult.slice(1).toLowerCase();
            break;
            
          default:
            // For most fields, use sentence case
            processedText = speechResult.charAt(0).toUpperCase() + speechResult.slice(1);
        }
        
        resolve(processedText);
      };
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        reject(`Speech recognition error: ${event.error}`);
      };
      
      recognition.onend = () => {
        // If no result was detected, reject
        if (!recognition.onresult) {
          reject('No speech was detected');
        }
      };
      
      // Play the audio and start recognition
      audio.onplay = () => {
        recognition.start();
      };
      
      audio.onerror = () => {
        reject('Error playing audio');
      };
      
      audio.play();
    } catch (error) {
      console.error('Error in voice processing:', error);
      reject('Speech recognition not supported in this browser');
    }
  });
}
