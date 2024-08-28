

export const Task = () => {

    const data = [
        { title: "Web Development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Web Design", note: 'Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet c adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Responsive Web Design", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blandmagni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequiitiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'L magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi orem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similiqmagni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequiue cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequielit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequimagni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
    ]
    return (
        <div className='w-full h-full'>
            <ul className='all_tasks w-full px-5 h-auto  flex items-start justify-start gap-5 flex-wrap '>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className='p-2 w-[220px] h-auto bg-[#FFFFFF] border-[1.2px] rounded-xl cursor-pointer mb-3  text-gray-950 shadow-white'>
                        <h5 className='text-sm font-bold uppercase border-b-[1px] py-1'>{item.title}</h5>
                        <p className='my-2 text-sm'>{item.note} </p>
                        <p></p>
                    </li>
                ))}
            </ul>

        </div>
    )
}


