import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();
    
    console.log("Processing contact request from:", email);

    // Validate inputs
    if (!name || !email || !message) {
      throw new Error("All fields are required");
    }

    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      throw new Error("Input exceeds maximum length");
    }

    const accessKey = Deno.env.get("WEB3FORMS_ACCESS_KEY");
    if (!accessKey) {
      throw new Error("WEB3FORMS_ACCESS_KEY not configured");
    }

    // Send to Web3Forms
    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("subject", "Новое обращение с сайта Eclipse PC");
    formData.append("from_name", "Eclipse PC Website");
    formData.append("replyto", email);
    formData.append("to", "davidmedov@icloud.com");

    const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await web3FormsResponse.json();

    if (!result.success) {
      console.error("Web3Forms error:", result);
      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully via Web3Forms");

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
