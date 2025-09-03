const Loading = () => {
	return (
		<div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8">
			<div className="relative w-24 h-24">
				<div className="absolute inset-0 rounded-full border-4 border-white/20" />
				<div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin" />
				<div className="absolute inset-2 rounded-full border-4 border-transparent border-t-white/50 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.2s' }} />
			</div>
			<div className="space-y-2 text-center">
				<div className="text-2xl font-bold text-white animate-pulse">
					Loading...
				</div>
				<div className="text-sm text-white/50">
					Please wait while we set things up
				</div>
			</div>
		</div>
	);
};

export default Loading;