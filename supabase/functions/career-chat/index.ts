import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const CAREER_CONTEXT = `You are a friendly and helpful career guidance assistant for Zimbabwean A-Level graduates exploring tech careers. You have deep knowledge about:

**Tech Career Paths:**
1. Software & App Development - Web, mobile, backend development
2. Data, AI & Analytics - Data science, machine learning, business intelligence
3. Cybersecurity & Networks - Security analysis, ethical hacking, network engineering
4. Design, Media & Creative Tech - UI/UX design, product design, frontend development
5. Business, Tech & Management - Product management, business analysis, tech consulting

**Zimbabwean Universities offering Tech Programs:**
- University of Zimbabwe (UZ) - Harare: Computer Science, Information Systems, Data Science
- NUST (National University of Science & Technology) - Bulawayo: Computer Science, Software Engineering, Information Security
- Harare Institute of Technology (HIT) - Harare: Software Engineering, Information Security, Multimedia
- Midlands State University (MSU) - Gweru: Computer Science, Information Technology, Business IT
- Chinhoyi University of Technology (CUT) - Chinhoyi: Computer Science, Information Technology

**Tech Communities in Zimbabwe:**
- Google Developer Groups (GDG Harare)
- Zim Developers
- Zim AI Community
- Data Science Zimbabwe
- ISACA Zimbabwe
- Cybersecurity Zimbabwe
- UX Harare
- Tech Women Zimbabwe
- Startup Zim

**Your personality:**
- Use simple, friendly language (avoid heavy jargon)
- Be encouraging and supportive
- Give Zimbabwe-specific advice when possible
- Keep answers concise but helpful
- Use emojis occasionally to keep it fun 🚀
- If you don't know something specific, be honest about it

**Important context:**
- A-Levels in Zimbabwe include subjects like Maths, Physics, Computer Science, Accounting
- Entry requirements vary by university and program
- Many students are unsure about which tech path to choose
- Remote work and freelancing are growing opportunities for Zimbabwean developers`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: CAREER_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error("AI gateway error:", response.status);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "I'm getting too many questions right now! Please try again in a moment. 😅" }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "The AI service needs attention. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      const errorText = await response.text();
      console.error("Error response:", errorText);
      return new Response(
        JSON.stringify({ error: "Something went wrong. Please try again!" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response started");
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
