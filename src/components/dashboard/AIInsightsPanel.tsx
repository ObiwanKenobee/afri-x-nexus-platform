
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const AIInsightsPanel = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI business advisor. You can ask me questions about market trends, business models, funding strategies, or get feedback on your business plan.",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: prompt,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setPrompt("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Based on your business model, I'd recommend focusing on customer acquisition channels with lower CAC first. Social media marketing and partnerships with local businesses could be effective starting points.",
        "Your target market seems well-defined. Looking at recent trends in this sector, consider a freemium pricing model to gain initial traction before converting users to paid tiers.",
        "For this market segment, your main competitors are focusing on premium features. There's an opportunity to differentiate by offering a more accessible pricing tier while maintaining quality on core features.",
        "When approaching investors, emphasize your unique value proposition and market validation evidence. For your stage, angel investors and early-stage VCs with experience in African markets would be ideal to approach.",
      ];

      const aiMessage: Message = {
        role: "assistant",
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="border-0 shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-gray-800">AI Business Insights</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="chat">
          <TabsList className="w-full border-b border-gray-100 rounded-none px-6">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="analyze">Business Analysis</TabsTrigger>
            <TabsTrigger value="market">Market Research</TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="p-6">
            <div className="flex flex-col h-[500px]">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === "user"
                          ? "bg-afrix-blue text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p>{message.content}</p>
                      <div
                        className={`text-xs mt-2 ${
                          message.role === "user" ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-4 bg-gray-100">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></div>
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <form onSubmit={handleSubmit} className="relative">
                <Input
                  placeholder="Ask about business models, market trends, funding..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="pr-24"
                />
                <Button
                  type="submit"
                  className="absolute right-1 top-1 bg-afrix-blue hover:bg-afrix-blue/90"
                  disabled={isLoading}
                >
                  Send
                </Button>
              </form>
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" className="text-xs" onClick={() => setPrompt("How can I improve my pitch deck?")}>
                  Improve my pitch deck
                </Button>
                <Button variant="outline" size="sm" className="text-xs" onClick={() => setPrompt("What are current funding trends in Africa?")}>
                  Funding trends
                </Button>
                <Button variant="outline" size="sm" className="text-xs" onClick={() => setPrompt("How to calculate my market size?")}>
                  Market sizing
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="analyze" className="p-6">
            <div className="text-center py-8 px-4 space-y-4">
              <div className="mx-auto w-16 h-16 bg-afrix-blue/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-afrix-blue">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-afrix-blue">Business Model Analysis</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Upload your business plan or fill out our guided questionnaire for a detailed analysis of your business model.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <Button className="bg-afrix-blue hover:bg-afrix-blue/90">
                  Upload Business Plan
                </Button>
                <Button variant="outline">
                  Complete Questionnaire
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="market" className="p-6">
            <div className="text-center py-8 px-4 space-y-4">
              <div className="mx-auto w-16 h-16 bg-afrix-green/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-afrix-green">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-afrix-green">Market Research Tools</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Access market data, competitor analysis, and consumer insights for your industry and region.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto mt-4">
                <Button variant="outline" className="border-afrix-green/30 hover:bg-afrix-green/5">
                  Industry Reports
                </Button>
                <Button variant="outline" className="border-afrix-green/30 hover:bg-afrix-green/5">
                  Competitor Analysis
                </Button>
                <Button variant="outline" className="border-afrix-green/30 hover:bg-afrix-green/5">
                  Consumer Data
                </Button>
                <Button variant="outline" className="border-afrix-green/30 hover:bg-afrix-green/5">
                  Market Sizing
                </Button>
                <Button variant="outline" className="border-afrix-green/30 hover:bg-afrix-green/5">
                  Trend Forecasts
                </Button>
                <Button variant="outline" className="border-afrix-green/30 hover:bg-afrix-green/5">
                  Regional Insights
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AIInsightsPanel;
