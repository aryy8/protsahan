
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
  try {
    // Convert audio blob to base64
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = async () => {
        try {
          // In a real implementation, you would send this to Google's Speech-to-Text API
          // For now, we're simulating the response
          
          // This simulates processing time
          await new Promise(r => setTimeout(r, 1000));
          
          // Return a simulated response based on field type
          switch (fieldType) {
            case 'name':
              return resolve('John Doe');
            case 'email':
              return resolve('john.doe@example.com');
            case 'education':
              return resolve('Undergraduate');
            case 'fieldOfStudy':
              return resolve('Computer Science');
            case 'achievements':
              return resolve('Dean\'s list for 3 consecutive semesters, won the national coding competition');
            case 'financialNeed':
              return resolve('Medium');
            case 'extracurriculars':
              return resolve('Member of computer science club, volunteer at local shelter');
            default:
              return resolve('');
          }
        } catch (error) {
          console.error('Error processing voice input:', error);
          reject('Failed to process voice input');
        }
      };
      reader.onerror = () => {
        reject('Failed to read audio file');
      };
      reader.readAsDataURL(audioBlob);
    });
  } catch (error) {
    console.error('Error in voice processing:', error);
    return 'Error processing voice input';
  }
}
