
export const MailBody = (fruits: string[]) => {
  console.log("fruits", fruits);
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

