import React from 'react';

const items = [
    {
        id: 1,
        image_link: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Autem itaque soluta reiciendis laboriosam? Dolores sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
    },
    {
        id: 2,
        image_link: 'https://images.unsplash.com/photo-1660314176057-d01f4ec7d4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Autem itaque soluta reiciendis laboriosam? Dolores sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
    },
    {
        id: 3,
        image_link: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
    },
    {
        id: 4,
        image_link: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
    },
    {
        id: 5,
        image_link: 'https://images.unsplash.com/photo-1660309135532-4032c4409f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, molestiae minus iure debitis quaerat assumenda deserunt, dignissimos deleniti tenetur quas eius, culpa dolores. Sed fuga facilis dolor deleniti accusamus impedit libero accusantium soluta, eaque quo, eos dolorum inventore. Necessitatibus voluptatum tenetur obcaecati amet.'
    }
]

function Index() {
    return (
        <div className='px-2'>
            <div className="max-w-7xl mx-auto">
                {items.map((item, index) => (
                    <div key={index} className={`grid grid-cols-2 gap-5 py-2`}>
                        <div className={`col-span-2 md:col-span-1 flex justify-center ${item.id % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                            <img src={item.image_link} className='w-10/12 md:w-9/12 lg:8/12 rounded-lg' alt="" />
                        </div>
                        <div className={`col-span-2 md:col-span-1 h-auto px-5 flex items-center ${item.id % 2 === 0 ? 'order-2 md:order-1' : 'order-1'}`}>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index