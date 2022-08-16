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
        title: 'Title 02',
        image_link: 'https://images.unsplash.com/photo-1660463973069-9815c8d27e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Autem itaque soluta reiciendis laboriosam? Dolores sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
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