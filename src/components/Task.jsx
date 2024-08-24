

export const Task = () => {

    const data = [
        { title: "Web Development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Web Design", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Responsive Web Design", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
        { title: "Front end development", note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni blanditiis similique cum architecto sequi dolores odio ullam placeat explicabo!' },
    ]
    return (
        <div className='p-3'>
            <ul className='mt-4 w-full flex items-start justify-start gap-2 flex-wrap'>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className='p-2 w-[220px] h-auto bg-slate-50 my-3 overflow-hidden text-gray-950'>
                        <h3 className='text-2xl font-semibold uppercase border-b-2'>{item.title}</h3>
                        <p className='my-2'>{item.note} </p>
                        <p></p>
                    </li>
                ))}
            </ul>

        </div>
    )
}
