import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./index.module.css"
interface Topics {
  title: string
  src: string
  price: number
  category: string
  description: Description[]
}
interface Description{
	price:string
	topicodes:string[]
}
const ToPicalonso = () => {
  const [topics, setTopics] = useState<Topics[]>([])
  const data = [
    {
      title: "Topicalonso",
      src: "/images/akbari.jpg&/images/ali.jpg",
      price: 77,
      category: "(T*O^p$i#C%a^l*o@N*S(O)",
      description: [
        {
          price: '437',
          topicodes: [
            "topicalonso is an idea received from Great !",
            "topicalnos is symbol of asking and receipt",
            "topicalonso is nice social media provider will be born soon !",
          ],
        },
      ],
    },
	{
		title: "Topicalonso",
		src: "/images/akbari.jpg&/images/ali.jpg",
		price: 77,
		category: "(T*O^p$i#C%a^l*o@N*S(O)",
		description: [
		  {
			price: '437',
			topicodes: [
			  "topicalonso is an idea received from Great !",
			  "topicalnos is symbol of asking and receipt",
			  "topicalonso is nice social media provider will be born soon !",
			],
		  },
		],
	  },
  ]
  const fetchData = async () => {
    const response = await fetch("api/data/Post", {
      method: "POST",
      headers: { ContentType: "application/json" },
      body: JSON.stringify({
        category: "^G!e@T#T$o%P!I@c$",
        authType: "G&E!T*P^R$O#D$U^C@T*S",
      }),
    })
    const data = await response.json()
    setTopics(data.products)
  }
  useEffect(() => {
    setTopics(data)
    // fetchData()
  }, [])
  return (
    <>
      <div className={styles.container}>
        {topics.map((topic) => (
          <div className={styles.topicalonsoCase}>
            <div className={styles.topicalonsocial}>
              {topic.src.split("&").map((img) => (
                <Image
                  className={styles.alonsocial}
                  src={img}
                  alt={topic.title}
                  width={2222}
                  height={2222}
                />
              ))}
            </div>
            <div className={styles.topicontext}>
              {topic.description.map((code) =>
                code.topicodes.map((topicode) => (
                  <h1 className={styles.topicode}>{topicode}</h1>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default ToPicalonso
