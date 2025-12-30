import React, { useState, useRef } from "react";

const ShareProgress = ({ stats, profile }) => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);

  const generateShareText = () => {
    return `🔥 Fasting Journey Update 🔥

📊 Progress Report:
⚖️ Current: ${stats.currentWeight} lbs
📉 Lost: ${stats.lostSoFar.toFixed(1)} lbs
🎯 Progress: ${stats.progressPercent.toFixed(1)}%
${stats.bmi ? `📐 BMI: ${stats.bmi}` : ""}

💪 On my way to ${profile.goalWeight} lbs!

#FastingJourney #HealthGoals #WeightLoss`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateShareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const generateProgressImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 500;

    const gradient = ctx.createLinearGradient(0, 0, 600, 500);
    gradient.addColorStop(0, "#1e1b4b");
    gradient.addColorStop(0.5, "#581c87");
    gradient.addColorStop(1, "#1e1b4b");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 500);

    ctx.fillStyle = "#fbbf24";
    ctx.font = "bold 36px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("🔥 Fasting Journey Update 🔥", 300, 50);

    ctx.fillStyle = "white";
    ctx.font = "bold 24px system-ui";
    ctx.fillText("📊 Progress Report", 300, 100);

    ctx.textAlign = "left";
    ctx.font = "22px system-ui";
    let y = 150;
    const lineHeight = 40;

    ctx.fillStyle = "#10b981";
    ctx.fillText(`⚖️ Current: ${stats.currentWeight} lbs`, 80, y);
    y += lineHeight;

    ctx.fillStyle = "#f59e0b";
    ctx.fillText(`📉 Lost: ${stats.lostSoFar.toFixed(1)} lbs`, 80, y);
    y += lineHeight;

    ctx.fillStyle = "#ec4899";
    ctx.fillText(`🎯 Progress: ${stats.progressPercent.toFixed(1)}%`, 80, y);
    y += lineHeight;

    if (stats.bmi) {
      ctx.fillStyle = "#a78bfa";
      ctx.fillText(`📐 BMI: ${stats.bmi}`, 80, y);
      y += lineHeight;
    }

    y += 20;
    ctx.fillStyle = "#22c55e";
    ctx.font = "bold 26px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(`💪 On my way to ${profile.goalWeight} lbs!`, 300, y);

    y += 50;
    const barX = 50;
    const barWidth = 500;
    const barHeight = 30;

    ctx.fillStyle = "#374151";
    ctx.beginPath();
    ctx.roundRect(barX, y, barWidth, barHeight, 15);
    ctx.fill();

    const progressGradient = ctx.createLinearGradient(
      barX,
      0,
      barX + barWidth * (stats.progressPercent / 100),
      0
    );
    progressGradient.addColorStop(0, "#22c55e");
    progressGradient.addColorStop(1, "#10b981");
    ctx.fillStyle = progressGradient;
    ctx.beginPath();
    ctx.roundRect(
      barX,
      y,
      barWidth * (stats.progressPercent / 100),
      barHeight,
      15
    );
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.font = "bold 14px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(
      `${stats.progressPercent.toFixed(1)}%`,
      barX + (barWidth * (stats.progressPercent / 100)) / 2,
      y + 21
    );

    y += 60;
    ctx.fillStyle = "#9ca3af";
    ctx.font = "16px system-ui";
    ctx.fillText(
      `${profile.startingWeight} lbs → ${stats.currentWeight} lbs → ${profile.goalWeight} lbs (goal)`,
      300,
      y
    );

    ctx.fillStyle = "#6b7280";
    ctx.font = "14px system-ui";
    ctx.fillText("#FastingJourney #HealthGoals #WeightLoss", 300, 470);

    return canvas.toDataURL("image/png");
  };

  const downloadImage = () => {
    const imageData = generateProgressImage();
    if (imageData) {
      const a = document.createElement("a");
      a.href = imageData;
      a.download = `fasting-progress-${
        new Date().toISOString().split("T")[0]
      }.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Fasting Progress",
          text: generateShareText(),
          url: "https://fasting.ketanshukla.com",
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Share failed:", err);
        }
      }
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
      <h3 className="text-lg font-bold text-white mb-4">📤 Share Progress</h3>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={shareNative}
          className="py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
        >
          📱 Share
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          🖼️ Create Image
        </button>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              📤 Share Your Progress
            </h3>

            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                {generateShareText()}
              </pre>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={copyToClipboard}
                className={`py-2 rounded-lg font-medium transition-all ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {copied ? "✓ Copied!" : "📋 Copy Text"}
              </button>
              <button
                onClick={downloadImage}
                className="py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                ⬇️ Download Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareProgress;
