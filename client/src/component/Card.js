import React from 'react'

const Card = ({post, setCurrentId}) => {
  return (
    <div>
      <div className="p-10">
        <div className=" w-1/2 lg:max-w-full lg:flex">
            <div
                className="border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        120 Followers with {post.experience} year Experience | {post.github} | {post.linkedIn}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{post.domain}</div>
                    <p className="text-gray-700 text-base">{post.about}</p>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{post.firstName} {post.lastName}</p>
                        <p className="text-gray-600">{post.email}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card
