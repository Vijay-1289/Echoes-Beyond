
// Legacy Gemini API function - kept for compatibility
export interface GeminiApiResponse {
  audioUrl: string;
  videoUrl: string;
}

export const generateAvatarResponse = async (
  message: string,
  imageUrl: string,
  voice: string,
  apiKey: string
): Promise<GeminiApiResponse> => {
  try {
    // In a real implementation, this would make an actual call to the Gemini API
    // For now, we'll simulate the response as we don't have the actual Gemini API implementation
    
    console.log(`Generating response with Gemini API:
      - Message: ${message}
      - Image URL: ${imageUrl}
      - Voice: ${voice}
      - API Key: AIzaSyDyXHENqkIGrYKEhF5bLJBveBmIPZdxct8`);
    
    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return simulated response for development
    return {
      audioUrl: "simulated-audio-url",
      videoUrl: imageUrl, // Using the same image URL for now since we don't have actual video generation
    };
  } catch (error) {
    console.error("Error generating avatar response:", error);
    throw new Error("Failed to generate avatar response");
  }
};

export const sendChatMessage = async (message: string): Promise<string> => {
 const apiKey = 'AIzaSyDyXHENqkIGrYKEhF5bLJBveBmIPZdxct8'; // Your Gemini API key
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: message }
          ]
        }]
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();    
    return data.message; // Assuming the API returns { message: 'AI response' }
  } catch (error) {
    console.error('Error sending message to Gemini API:', error);
    return 'Error: Could not get a response from the AI.'; // Or handle the error as you see fit
  }
};
