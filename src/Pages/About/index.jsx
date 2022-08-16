import React from 'react'

const items = [
    {
        id: 1,
        title: 'Title 01',
        image_link: 'https://images.unsplash.com/photo-1660470103975-463b15e156b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Autem itaque soluta reiciendis laboriosam? Dolores sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
    },
    {
        id: 2,
        title: 'Collaboration and Shared Leadership',
        image_link: 'https://images.unsplash.com/photo-1660463973069-9815c8d27e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        desc: 'Working in this field of study has taught me that it is just as important to collaborate and share ideas with my peers as it is to put my own foot forward and lead everyone myself. I could think my project through a hundred times and still miss the one piece that someone else could easily spot. Likewise, I could be sharing ideas with someone and help them figure out what else they could be working on. Collaborating with my peers means listening, finding common ground, and working on things that I might not be used to, just so that our shared project can get up off the ground. However, collaboration isn’t always a smooth and easy road to take, it’s not always as easy and straightforward as it should be. Collaboration and sharing leadership roles also means sharing the weight of responsibility through the rough patches as well. In some ways, this can bring a group closer as a shared learning experience. It can create an opportunity to learn how to communicate better, learn which group members are better at which roles, and it can provide a lesson on how to better think critically about these projects and situations. Two projects that I have worked on that are good examples of these lessons are when I remade the IMD homepage on the UWB website and had to create an elevator pitch for a currently relevant debate topic. My team and I were tasked with redesigning the IMD homepage for multiple reasons. There was too much text that made a design major page look chunky, it wasn’t updated regularly, it wasn’t interesting to read or look at, and it didn’t provide enough useful information. The first steps to redesigning it were figuring out what information we wanted to convey on the site. My group had to decide together how we wanted to split up the project and communicated what we were doing so that we were all on the same page. We had to make this new IMD homepage more cohesive than it was before - otherwise there would be no point in fixing it. We had to decide what was important information, as well as come up with a more interesting way to present information, and we wanted to make sure it was simple to navigate. In order to work quickly, the workload had to be shared; but we couldn’t just go our separate ways. We tried playing to our strengths - I really enjoy doing research and taking notes on it, one of my other groupmates preferred the writing process, and so on. However, I quickly learned that communication was going to be very important in order to create something that we could all be proud of, although overall the project was disappointing as by the end of it, we learned that higher-ups didn’t want to go through the complicated process to actually revamp the UW employee-made page. The second project was a research paper and elevator pitch proposal and was a good learning experience overall. My partners had trouble with communication which led to problems from the beginning. We had to spend time finding research papers, but because of the difficulty communicating we ended up finding some of the same papers, or other group members found irrelevant articles. There was also confusion about who was supposed to be working on what part of the project, when it had to be finished by, and a team member being sick for the whole research phase. This was a good learning experience for me in a few different ways. It helped me realize that I need to be open about my expectations and ideas instead of just doing all the work, and I learned that I should play to each person’s strengths instead of passing random roles to others, and I discovered how important it is to manage a group effectively..'
    },
    {
        id: 3,
        title: 'Title 03',
        image_link: 'https://images.unsplash.com/photo-1660463973069-9815c8d27e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
    },
    {
        id: 4,
        title: 'Title 04',
        image_link: 'https://images.unsplash.com/photo-1660473823393-acf16f7db71f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=593&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
    },
    {
        id: 5,
        title: 'Title 05',
        image_link: 'https://images.unsplash.com/photo-1657299170237-2d4cd59b5156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
    },
    {
        id: 6,
        title: 'Title 06',
        image_link: 'https://images.unsplash.com/photo-1657299170237-2d4cd59b5156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
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
            <div className="max-w-7xl mx-auto flex flex-col gap-4">
                <p className="text-center text-2xl font-bold">Capstone Essay</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis ad aut minus esse? Quam est sunt sed iure placeat quidem, ad reprehenderit ea maiores. Quia voluptatum minima non maiores. Quae deleniti enim ducimus obcaecati voluptatibus molestias quasi neque fugit. Tempore enim doloribus excepturi eligendi eaque. Ipsa quia quaerat itaque facere exercitationem dolorum necessitatibus alias iure cupiditate, nihil quasi expedita! Ullam amet tenetur suscipit impedit assumenda repudiandae autem dolores nihil culpa enim odit ipsam laudantium qui eligendi, fugiat inventore cum? Ad placeat sapiente corporis alias reiciendis sequi atque voluptatibus necessitatibus est minima! Esse magnam libero, nesciunt reiciendis illo voluptatum praesentium dolores exercitationem excepturi non culpa eum aspernatur incidunt? Praesentium odio porro, est cupiditate sunt provident fugit reprehenderit incidunt similique excepturi temporibus accusantium quo voluptatum hic expedita. Assumenda maxime, qui eaque beatae itaque similique iste reprehenderit numquam, nisi alias libero ratione, inventore tempore voluptatum ea enim ducimus corporis nobis quod distinctio!</p>
            </div>
        </div>
    )
}

export default Index
