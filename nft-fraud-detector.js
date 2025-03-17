import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, CheckCircle, XCircle } from "lucide-react";

export default function NftFraudDetection() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);

    // Simulated API call for AI fraud detection
    setTimeout(() => {
      const isFraud = Math.random() > 0.5; // Random fraud detection for demo
      setResult({ isFraud, confidence: (Math.random() * 100).toFixed(2) });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-xl bg-white">
        <h1 className="text-xl font-bold text-center mb-4">AI NFT Fraud Detection</h1>
        <Input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
        <Button onClick={handleUpload} disabled={loading} className="w-full flex items-center justify-center">
          <UploadCloud className="mr-2" /> {loading ? "Analyzing..." : "Upload & Analyze"}
        </Button>
        {result && (
          <CardContent className="mt-4 p-4 bg-gray-50 rounded-lg">
            {result.isFraud ? (
              <div className="flex items-center text-red-600">
                <XCircle className="mr-2" /> Fraudulent NFT Detected ({result.confidence}% confidence)
              </div>
            ) : (
              <div className="flex items-center text-green-600">
                <CheckCircle className="mr-2" /> NFT is Authentic ({result.confidence}% confidence)
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
}