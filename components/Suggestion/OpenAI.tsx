import React, { useState } from 'react'
import { clsx } from 'clsx'
import { BuyerProduct } from 'ordercloud-javascript-sdk'
import OpenAI from 'openai'

const professions = ['Front-end Developer', 'Back-end Developer', 'Project-Manager', 'Tech Lead']
const Customhobbies = [
  'Reading',
  'Writing',
  'Painting/drawing/sketching',
  'Photography',
  'Gardening',
  'Cooking/baking',
  'Playing musical instruments',
  'Dancing',
  'Hiking/nature walks',
  'Camping',
  'Yoga',
  'Meditation',
  'Cycling',
  'Running/jogging',
  'Swimming',
  'Playing team sports',
  'Fishing',
  'Birdwatching',
  'DIY projects/home improvement',
  'Traveling/exploring new places',
  'Watching movies/TV shows',
  'Playing video games',
  'Collecting',
  'Pottery/ceramics',
  'Knitting/crocheting',
  'Sewing',
  'Volunteering/community service',
  'Board games/card games',
  'Playing chess',
  'Learning new languages',
]

// const aiResponseType = "{reason,products:products array}"

const prompts = [
  'Use this Product listing data and provide products type of {reason,products:products array} only from provided products which will suit the user which have hobbies of ',
  ' and working as ',
  ' and live in india. product data: ',
]

const OpenAISuggest = ({ products }: { products: BuyerProduct[] }) => {
  const [selectProfesssion, setSelectProfesssion] = useState<string | null>(null)
  const [hobbies, setHobbies] = useState({})

  const [isShowModel, setIsShowModel] = useState(false)
  const [aiResponse, setAiResponse] = useState(false)

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
    organization: process.env.NEXT_PUBLIC_ORG || '',
    dangerouslyAllowBrowser: true,
  })

  // const openai = new OpenAI();
  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY || '',
  // })
  // const openai = new OpenAIApi(configuration)

  const handleHobbiesSelection = (hobby: string) => {
    setHobbies((prevHobby) => ({ ...prevHobby, [hobby]: !hobbies[hobby] }))
  }

  const findSuggestion = async () => {
    const hobbiesString = Object.keys(hobbies)
      .filter((key) => hobbies[key])
      .join(' ')

    const smallProducts = products.map((product) => ({
      Description: product.Description,
      ID: product.ID,
      Name: product.Name,
      xp: product.xp,
    }))
    console.log('SMALL PRODUCT', smallProducts)
    const promptString =
      prompts[0] +
      hobbiesString +
      prompts[1] +
      selectProfesssion +
      prompts[2] +
      JSON.stringify(smallProducts)

    // console.log('prmpt string:', promptString)
    // setAiResponse()
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: promptString }],
    })
    console.log('chatCompletion.choices[0].message:', chatCompletion.choices[0].message)
    console.log('result: ', JSON.parse(chatCompletion.choices[0].message.content))
    if (JSON?.parse(chatCompletion.choices[0].message.content)) {
      const resJson = JSON.parse(chatCompletion.choices[0].message.content)
      console.log('Res Json: ', resJson)
      setAiResponse(resJson)
    }
    // setAiResponse()
  }

  return (
    <div>
      <button className="btn-grad" onClick={() => setIsShowModel((prev) => !prev)}>
        Get AI Suggestion
      </button>
      {/* --- Select multiple choice --- */}
      {isShowModel && (
        <div className="border-2 rounded-lg bg-gray-100 py-4">
          <div>
            <p className="p-4 font-semibold text-2xl">Select Profession</p>
            <div className="flex mx-4">
              {professions.map((profession, idx) => (
                <span
                  onClick={() => setSelectProfesssion(profession)}
                  key={idx}
                  className={clsx(
                    'w-fit',
                    'rounded-2xl',
                    'mx-2',
                    'border',
                    'p-2',
                    'cursor-pointer',
                    {
                      'bg-blue-400': profession === selectProfesssion,
                      'hover:bg-blue-200': profession !== selectProfesssion,
                    }
                  )}
                >
                  {profession}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="p-4 font-semibold text-2xl">Select Hobbies</p>
            <div className="flex flex-wrap gap-2 mx-4">
              {Customhobbies.map((hobby, idx) => (
                <span
                  onClick={() => handleHobbiesSelection(hobby)}
                  key={idx}
                  className={clsx('w-fit', 'rounded-2xl', 'border', 'p-2', 'cursor-pointer', {
                    'bg-blue-400': hobbies[hobby],
                    'hover:bg-blue-200': !hobbies[hobby],
                  })}
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
          <button
            className="btn-grad border p-2 rounded-xl m-4 bg-blue-200"
            onClick={() => findSuggestion()}
          >
            Suggest me
          </button>
          {aiResponse && <div>{aiResponse['reason']}</div>}
        </div>
      )}
    </div>
  )
}

export default OpenAISuggest
