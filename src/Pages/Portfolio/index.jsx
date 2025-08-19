import React, { useRef, useState } from 'react';

const items = [
	{
		id: 1,
		title: 'AFK Arena Content Creator Camp',
		role: 'Creator Program Lead – Pitch, Launch, and Management',
		desc:
			'I pitched this idea to our staff, and upon approval, launched the Content Creator Camp. From initial strategy to execution, I oversaw all aspects of the program: setting up the Discord server, scouting and onboarding, defining rules, providing individual support, and coordinating with our various internal departments as necessary. This program has increased our high-quality user-generated content output nearly tenfold, and strengthened the connection and recognition between creators and the community.',
		highlights: [
			{
				title: 'Highlights',
				points: [
					'Successfully launched the program with 40 creators in the first cohort',
					'Increased user-generated content output by over 900% over the first quarter',
					'Provided a platform for creators to connect, share, and grow their channels together',
					'Secured both in-game and real-world rewards for our creators',
				],
			},
		],
		image_link: '/images/creatorcamp.webp',
	},
	{
		id: 2,
		title: 'AFK Arena & Journey Community Platforms',
		role: 'Head Moderator & Community Manager',
		desc:
			'I manage our large-scale online communities across Reddit and Discord, focused on maintaining a positive, inclusive, and healthy space for players of all experience levels to engage in. I built our Subreddit communities from the ground up, custom scripted YAML automation, and provide daily moderation support to our users as necessary. Head overseer of our Moderation Team and acting as the bridge between our mods/players and the official side.',
		highlights: [
			{
				title: 'Reddit Highlights',
				points: [
					'Built r/AFKArena and r/AFKJourney from scratch, growing them to 263k and 92k members respectively',
					'Custom scripted YAML automation to streamline/expedite moderation tasks and improve user experience',
					'Update our weekly resources, guides, and FAQs to keep them current and relevant',
					'Collaborated with dev teams to gather and respond to player feedback and suggestions (more on this below)',
				],
			},
			{
				title: 'Discord Highlights',
				points: [
					'Lead our moderation team, distributing tasks and ensuring their compensation is distributed on time',
					'Compose and send out announcements, updates, and important information to our players',
					'Organized and ran community events, contests, Q&A sessions, and more',
					'Provide weekly sentiment analysis reports to the development team for discussion and implementation',
				],
			},
		],
		image_link: '/images/community.png',
	},
	{
		id: 3,
		title: 'AFK Arena & Journey Feedback Initiatives',
		role: 'Pitch, Research, Discussion, and Implementation',
		desc: 'Launched a new recurring public program for players to share their feedback and suggestions, and vote on each other\'s ideas. This not only allows us to gather valuable insights from our community, but allows us to see what the community views as highest priority while giving the community a shared voice that promotes discussion and development in a direction they are shaping.',
		highlights: [
			{
				title: 'Highlights',
				points: [
					'Pitched the idea to our team and secured approval for implementation',
					'Gathered and organized suggestions, with our top 10 most voted receiving a public response from the team',
					'Other top suggestions that didn\'t make the cut were still discussed and considered for future implementation',
				],
			},
		],
		image_link: '/images/mailbox.webp',
	},
	{
		id: 4,
		title: 'Technical Contributions & Support',
		role: 'Technical QA, Bug Reporting, and Code Review',
		desc: 'While not within my usual scope of work, I have contributed to our development team by providing technical QA support, bug reporting, and code review. Bug reporting topics from the community is something I do on a regular basis, but there have been instances where I know exactly what to fix in the source code due to my programming background in univerity.',
		highlights: [
			{
				title: 'Highlights',
				points: [
					'Set up and streamlined an environment to share bug reports from the community to our dev team',
					'Code reviewed and provided working solution adapted into published hotfix',
					'Data Analysis: CLV/LTV, ARPU/DAU, lifecycle optimization goals, social media trends and performance, etc',
				],
			},
		],
		image_link: '/images/code1.png',
	},
	{
		id: 5,
		title: 'Video Game SFX and Music Composition',
		role: 'Sound Designer, Engineer, and Music Composer',
		desc: 'I grew up playing music from a very young age, and while I haven\'t been able to pursue that in a professional setting yet, it\'s still something I\'m very passionate about, and would love to contribute towards, or at least explore further in a future role if given the opportunity. In university, I participated in a Game Jam where I made all of the SFX and composed three original tracks for the game.',
		highlights: [
			{
				title: 'Highlights',
				points: [
					'Created all SFX with a variety of tools and techniques, including digital audio workstations and field recordings',
					'Composed three original tracks for the game via MIDI keyboard and DAW',
					'Unfortunately, all of this content was lost due to extremely heartbreaking circumstances - can share details upon request',
				],
			},
		],
		image_link: '/images/music.png',
	},
];

function PortfolioCard({ item }) {
	const imgRef = useRef(null);
	const [imgWidth, setImgWidth] = useState(undefined);

	const handleImgLoad = () => {
		if (imgRef.current) {
			setImgWidth(imgRef.current.width);
		}
	};

	return (
		<div
			className="bg-black/60 rounded-xl shadow-lg p-4 flex flex-col items-center" // changed from bg-slate-800
			style={{
				width: imgWidth ? `${imgWidth}px` : 'auto',
				minWidth: 220,
				maxWidth: 400,
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<img
				ref={imgRef}
				src={item.image_link}
				alt={item.title}
				className="w-full object-contain rounded-lg mb-4 bg-black/60" // changed from bg-slate-800
				onLoad={handleImgLoad}
				style={{ display: 'block' }}
			/>
			<div className="w-full flex flex-col">
				<h2 className="text-xl font-bold text-white">{item.title}</h2>
				{item.role && (
					<p className="text-base font-semibold text-cyan-300">{item.role}</p>
				)}
				<p className="text-sm text-gray-200">{item.desc}</p>
				{item.highlights &&
					item.highlights.map((section, idx) => (
						<div key={idx} className="mt-2">
							<p className="font-semibold text-white mb-1 text-sm">
								{section.title}
							</p>
							<ul className="list-disc list-outside pl-6 text-gray-100 text-sm">
								{section.points.map((point, i) => (
									<li key={i}>{point}</li>
								))}
							</ul>
						</div>
					))}
			</div>
		</div>
	);
}

function Index() {
	return (
		<div className="px-2 py-8 min-h-screen">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold mb-10 text-center text-white">
					Portfolio
				</h1>
				{/* First two items: stacked, alternating image/text sides */}
				{items.slice(0, 2).map((item, idx) => (
					<div
						key={item.id}
						className={`flex flex-col md:flex-row ${
							idx % 2 === 1 ? 'md:flex-row-reverse' : ''
						} gap-8 mb-10 items-stretch`}
						style={{ minHeight: 350 }}
					>
						<div className="flex justify-center items-center w-full md:w-1/2">
							<img
								src={item.image_link}
								alt={item.title}
								className="w-full h-auto max-h-[95%] rounded-lg object-contain my-2"
								style={{ display: 'block' }}
							/>
						</div>
						<div className="flex flex-col gap-2 justify-center px-2 w-full md:w-1/2">
							<h2 className="text-2xl font-bold text-white">
								{item.title}
							</h2>
							{item.role && (
								<p className="text-lg font-semibold text-cyan-300">
									{item.role}
								</p>
							)}
							<p className="text-base text-gray-200">{item.desc}</p>
							{item.highlights &&
								item.highlights.map((section, idx2) => (
									<div key={idx2} className="mt-2">
										<p className="font-semibold text-white mb-1">
											{section.title}
										</p>
										<ul className="list-disc list-outside pl-6 text-gray-100">
											{section.points.map((point, i) => (
												<li key={i}>{point}</li>
											))}
										</ul>
									</div>
								))}
						</div>
					</div>
				))}
				{/* Remaining items: smaller cards in a grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{items.slice(2).map((item) => (
						<PortfolioCard key={item.id} item={item} />
					))}
				</div>

				{/* Testimonials Section */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold text-center text-white mb-4">
						Testimonials - Coming Soon
					</h2>
					<div className="max-w-xl mx-auto bg-black/60 rounded-lg p-6 shadow text-gray-200 text-center text-base">
                        This section will feature testimonials from collaborators and cohorts. I’m currently gathering individuals' permissions to ensure their comfort with their words and identities being shared here.
                        <br />
                        In the meantime, feel free to reach out to me directly if you’d like a copy of my Letter of Recommendation from a supervisor at Lilith Games.
                    </div>
				</div>
			</div>
		</div>
	);
}

export default Index;
