import React from 'react'

const items = [
    {
        id: 1,
        title: 'About Me',
        image_link: '/images/LinkedInPFP.jpg',
        desc: 'Hi there! I’m Alex Vickrey, a community manager and digital media designer passionate about creating welcoming, player-first communities in the greater gaming industry. With a Bachelor’s in Digital Art and Media Design from the University of Washington, I bridge development teams with hands-on player engagement to help games thrive both in and out of play.'
    },
    {
        id: 2,
        title: 'Education',
        subtitle: 'University of Washington',
        subtitle2: 'BA - Digital Art and Media Design',
        image_link: '/images/UW.jpg',
        desc: 'At the University of Washington, I earned my BA in Digital Art and Media Design, with a focus on the gaming industry and business/marketing. The program was intentionally broad, giving me hands-on experience across disciplines like photography/film, UI/UX, interactive design, and much more. Alongside the creative work, I also developed a strong foundation in project management methodologies - from Agile and Scrum to Lean and Waterfall - and learned how the philosophies behind each shape real-world production.\n\nEach quarter, I collaborated with different students on fresh projects, simulating the fast-changing environments of creative studios. These experiences taught me how to bring both artistry and structure into my work, balancing big-picture creativity with technical expertise and industry-standard practices. That intersection where creativity and artistic vision meets fundamentals and solid execution is where I thrive.'
    },
    {
        id: 3,
        title: 'Lilith Games',
        subtitle: 'Assistant Community Manager & QA',
        subtitle2: 'AFK Arena & AFK Journey (2024 iPhone & Google Play Game of the Year)',
        image_link: '/images/GotY.jpeg',
        desc: 'Since graduating, I’ve worked with Lilith Games as an Assistant Community Manager on AFK Arena and AFK Journey. The role combines elements of community building, marketing, content creation, and live operations, giving me the opportunity to drive impact across multiple facets of player experience. I’ve built official community platforms from the ground up, launched initiatives like our Content Creator Camp to amplify user-generated content, and organized engaging social events that bring players closer to the heart of the games, fostering that sense of community-building that\'s so important to live-ops games.\n\nEvery aspect of my work has centered on connecting players and developers, ensuring feedback not only gets heard but meaningfully influences the direction and progression of our games. This blend of community-building, content strategy, and cross-functional team collaboration has allowed me to grow both as a creative and as a bridge between audiences and creators.\n\n(For more detailed information on my role and responsibilities with Lilith Games, check out the Portfolio tab in the header.)'
    },
    {
        id: 4,
        title: 'Design Philosophy',
        image_link: '/images/generosity.png',
        desc: 'I’ve seen firsthand that budgets don’t determine success, players do. The industry is full of examples where massive investments couldn’t save a game that ignored its community, while smaller projects flourished by making players feel truly heard. That observation has shaped my own design philosophy: prioritize communication, empower communities, and iterate relentlessly.\n\nFor me, clear dialogue isn’t just a bonus, it’s the foundation. Whether collaborating with developers or engaging with players, I push for transparent conversations that build trust on both sides. When it comes to new features and implementations, I believe in treating launch as the starting point, not the finish line. Gather feedback, refine, release again, and keep iterating until the experience feels right for everyone. This process not only improves the game, it signals to players that their voices genuinely matter, keeping them engaged in the long run and boosting CLV/LTV.\n\nTo the left, I\'ve included some community discussion from Wuthering Waves and Warframe (feel free to right click to open in a new tab to zoom in if needed on your device), two industry titans that are thriving at the top of relative revenue charts. This financial success is especially in part due to their healthy and fair monetization practices which makes players excited to spend money and support their continued development, as opposed to feel alienated by a "need" to spend to keep up. Especially notable in Warframe\'s continued financial stability and community engagement, nearly 13 years after launch. These community testimonials speak for themselves to the success of this approach, and that player-first philosophy is one I aim to bring to the projects I work on.' 
    },
    {
        id: 5,
        title: 'Moving Forward',
        image_link: '/images/nature2.jpg',
        desc: 'Looking ahead, I’m excited to keep growing both as a creative and as a leader in the gaming industry. I feel lucky to have had the experiences I’ve had at Lilith Games, where I’ve not only honed my skills but also seen firsthand the impact a strong, player-first philosophy can have. The team has been wonderfully supportive of my next chapter, even writing me a glowing letter of recommendation (available on request). My vision is simple but ambitious: to help shape the future of how players experience games. I want those interactions to feel alive, lasting, and built on trust—where players know their voices matter, and developers embrace that feedback to create something greater together. Because at the end of the day, great games don’t just build communities; they are communities.'
    },
    {
        id: 6,
        title: 'Personal Life',
        image_link: '/images/nature4.jpg',
        desc: 'Long before I worked directly in the game industry, I was (and still am) a deeply dedicated player. I’ve been a gamer since childhood and knew very early on that I would pursue this industry as a career path. In fact, my role at Lilith Games came directly from years of community involvement and passion for AFK Arena. That perspective, as someone who deeply understands the player experience, proved meaningful to the team and gave me the opportunity to contribute to AFK Journey from its earliest stages. Watching it grow from an early build into a title that won both iPhone and Google Play’s Game of the Year was an unforgettable experience, and it reinforced my belief that when you prioritize players, you create something that truly lasts.\n\nIn my free time, I continue to explore creativity through music, photography, and videography - often drawing inspiration from the greater Seattle area (and PNW at large), the city I proudly call home. Every photograph on this website, including the background, is one I’ve taken myself, and I hope as I continue to expand this site I can include more photos, as I already had to make some cuts. Whatever the medium, I’m always seeking new ways to connect with people, spark emotion, and build meaningful experiences.'
    }
]

function Index() {
    return (
        <div className='px-2'>
            <div className="max-w-7xl mx-auto">
                {items.map((item, index) => (
                    <div key={index} className={`grid grid-cols-2 gap-5 py-5`}>
                        <div className={`col-span-2 md:col-span-1 flex justify-center ${item.id % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                            <img src={item.image_link} className='w-10/12 md:w-9/12 lg:w-8/12 rounded-lg' alt="" />
                        </div>
                        <div className={`col-span-2 md:col-span-1 h-auto px-5 flex flex-col gap-1 justify-center ${item.id % 2 === 0 ? 'order-2 md:order-1' : 'order-1'}`}>
                            <p className="text-2xl font-bold text-white">{item.title}</p>
                            {item.subtitle && (
                                <p className="text-lg font-semibold text-white pl-2">{item.subtitle}</p>
                            )}
                            {item.subtitle2 && (
                                <p className="text-base font-medium text-white pl-3">{item.subtitle2}</p>
                            )}
                            {item.desc.split('\n\n').map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto flex flex-col gap-4">
                <p className="text-center text-2xl font-bold">Thank You</p>
                <p> If you made it this far, I sincerely appreciate you for taking the time to learn a little about me. If you’d like to connect, collaborate, or just talk games, feel free to reach out.
</p>
            </div>
        </div>
    )
}

export default Index
