
export const MailBody = (fruits: string[]) => {
  return (
    <>
      <ul>
      {
        fruits.map((fruit: string, index: number) => (
          <li key={ index }>{ fruit }</li>
        ))
      }
      </ul>
    </>
  )
};

