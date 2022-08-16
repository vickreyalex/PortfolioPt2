import React from 'react';

const items = [
    {
        id: 1,
        title: 'Music for 3D Game Project. Alex Vickrey. Spring 2020. IMD363 Final.',
        image_link: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'This assignment was a group project in which I was tasked with creating two songs for a game we were making in my group - a title screen and an overworld theme. We were making this game over the course of the quarter and had a very limited time to work with, so it was a very lo-fi barebones game, much like that of a Game Jam. The songs I made were fully scored using FLStudio and played in-game. I believe this was a significant piece of my university work because it gave me the opportunity to use my musical abilities in a tech-related environment. While it’s not my primary focus with regards to pursuing a job in the future, I’ve grown up writing and playing music and I think having that mentioned in my portfolio, even if brief, is important to my identity.'
    },
    {
        id: 2,
        title: 'SFX for 3D Game Project. Alex Vickrey. Spring 2020. IMD363 Final.',
        image_link: 'https://images.unsplash.com/photo-1660314176057-d01f4ec7d4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        desc: 'For the same game that I talked about in the previous entry, I also had to create all of the sound effects. This was a really unique position I haven’t been in before, as I had to create footstep SFX for the playable human character and a younger human character, on four different types of floor material, as well as deer and wolves’ footprints on those same materials, water, swimming, campfire, and many more sound effects. I was just in charge of all audio work in general, so this is notably different than composing music, something I’m much more experienced with. This was a really fun and difficult project and I’ve never had any experience in sound design before. Using my studio mic, I burned a cardboard box outside and recorded it, made splashing sounds with water in the bathtub, a ton of editing in post, and overall made a ton of end results that I was really proud of. I think it further shows my versatility and capabilities as a digital artist.'
    },
    {
        id: 3,
        title: 'IMD Website. Alex Vickrey, Luis Uribe, Hieu Doan, Eimi Koga. Winter 2020. CSS478 Final.',
        image_link: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'For our final, my group and I had to remake the IMD homepage on the UWB website. For a digital arts program, we noticed the IMD site was extremely bland, text-heavy, and provided little actual useful information and resources for prospective and current students. Professor Arnie Lund asked us to redesign the site from the group up - unfortunately he wasn’t actually able to get the website live because of how many hoops he would have to jump through and permissions he would need, but we had the site made. I think this is an important piece of work to include since it’s the only element of Webpage design I have to show for my portfolio. Whether it’s coding or UI/UX, webpage creation is a very popular field and having any experience in that would likely be good for any design portfolio. '
    },
    {
        id: 4,
        title: 'Performance Art Video about Sleep. Alex Vickrey. Spring 2022. BISIA319 Final.',
        image_link: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'This project was a ~90 second video that I made with the prompt of depicting some daily ritual that I do in my life. I conceptualized the topic of sleep because it’s more of a daily ritual than anything else in that it’s forced, and I started scripting from there. The video performance was filmed using my phone and edited on my PC. I think this is likely the best solo piece of filmography I made throughout my time at UWB, and is a well made product of writing/scripting, directing, filming, acting, and editing. With a lot of photography as a hobby, filmmaking is very interesting to me and I love editing videos for content creation, so again, just diversifying my portfolio to give a kind of “jack of all trades” impression is my goal at this point.'
    },
    {
        id: 5,
        title: 'Game Addiction Research Project and Elevator Pitch. Alex Vickrey, Aaron Asmare, Marc Octavo. Spring 2022. BIS 300 Final.',
        image_link: 'https://images.unsplash.com/photo-1660309135532-4032c4409f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'My group of three had to choose a currently relevant debate topic such as climate change or legalization of marijuana (our group chose Video Game Addiction), research heavily, write a paper that defends our stance, and make an elevator pitch to a fake company as if we are going to have our own study on the topic. I think not only is the subject relevant to my field of study and interest, but having the work-related elements (elevator pitch) involved with this could show my experience in scripting and presenting to a group of people about a task I may be given in a job environment. '
    },
    {
        id: 6,
        title: 'iOS Stickers. Alex Vickrey. Spring 2020. B IMD 353 Project.',
        image_link: 'https://images.unsplash.com/photo-1660309135532-4032c4409f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'For this project, I had to choose a nonprofit organization to make digital iOS stickers for in order to promote their campaign. I chose #TeamTrees, which was very relevant at the time, and their mission to plant a tree for every dollar donated. At this time, they’ve planted 23.8 million trees and counting. I made the stickers using Adobe Photoshop and Illustrator. This was one of the few times I was able to make 2D digital art at UWB, whereas my profession/ideal position is in 3D art. I think making something for a nonprofit organization could be a good look, and having 2D art on my portfolio would show a knowledge and understanding of 2D art software.'
    },
    {
        id: 7,
        title: 'Apple Pie mobile game. Alex Vickrey. Spring 2020. B IMD 353 Project.',
        image_link: 'https://images.unsplash.com/photo-1660309135532-4032c4409f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'The game “Apple Pie” was a simple word-guessing game, where each player had a limited number of turns to guess the letters in a word; each incorrect guess resulted in an apple falling off the tree. The player wins by guessing the word correctly before all the apples are gone. This game was coded in Swift and the game was playable on an iPhone or iPad. While bare minimum in terms of actual game design, this project had us working on mobile devices. Most of what I’ve been doing and will be doing will be on a PC, but showing the ability to work on a mobile game/website/etc would likely be good to include if it’s not too basic?'
    },
    {
        id: 8,
        title: 'Video Presentation/Ad for fictional app. Alex Vickrey, Luis Uribe, Justin Ballard, Ian Bryan, Yana Garkusha. Winter 2020. B IMD 352 Final.',
        image_link: 'https://images.unsplash.com/photo-1660309135532-4032c4409f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'This project was a filmed (online during covid era) promotional video/advertisement for a hypothetical company we were working on, that would be an app for local musicians to meet and get together. Much like a dating app where you could customize a profile, link to artists and interests and whatnot, except none of the dating, just people looking for like minded artists to make music with. I handled all of the video editing for the video section of this project, as well as some conceptualization and app interface mockups. I think this project might be an important demonstration of my ability to conceptualize an app/platform from scratch and see it out to its completion in terms of interface and making something tangible out of an idea. '
    }
]

function Index() {
    return (
        <div className='px-2'>
            <div className="max-w-7xl mx-auto">
                {items.map((item, index) => (
                    <div key={index} className={`grid grid-cols-2 gap-5 py-5`}>
                        <div className={`col-span-2 md:col-span-1 flex justify-center ${item.id % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                            <img src={item.image_link} className='w-10/12 md:w-9/12 lg:8/12 rounded-lg' alt="" />
                        </div>
                        <div className={`col-span-2 md:col-span-1 h-auto px-5 flex flex-col gap-3 justify-center ${item.id % 2 === 0 ? 'order-2 md:order-1' : 'order-1'}`}>
                            <p className="text-2xl font-bold">{item.title}</p>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index
