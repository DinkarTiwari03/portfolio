const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] mix-blend-screen animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-glow/20 blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
    );
};

export default Background;
