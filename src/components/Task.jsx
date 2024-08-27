

export const Task = () => {

    const data = [
        { title: "Web Development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Web Design", note: 'Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet c adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Responsive Web Design", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
    ]
    return (
        <div className='w-full h-full'>
            <ul className=' w-full h-full flex items-start justify-start gap-2 flex-wrap'>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className='p-2 w-[220px] h-auto bg-[#FFFFFF] border-[1.2px] rounded-xl cursor-pointer mb-3  text-gray-950'>
                        <h5 className='text-sm font-bold uppercase border-b-[1px] py-1'>{item.title}</h5>
                        <p className='my-2 text-sm'>{item.note} </p>
                        <p></p>
                    </li>
                ))}
            </ul>

        </div>
    )
}


