

function Footer() {
  const bias = [
    { label: "Far Left", color: "bg-blue-700" },
    { label: "Left", color: "bg-blue-500" },
    { label: "Center", color: "bg-gray-400" },
    { label: "Right", color: "bg-red-500" },
    { label: "Far Right", color: "bg-red-700" },
  ];

  return (
    <div className="border-t border-white py-6 fixed bottom-0 w-full bg-[#202020]">
      <div className="flex justify-center items-center gap-6">
        {bias.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-fxl ${item.color}`} />
            <span className="text-sm text-white">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
