const LanguagesList = ({ languages }) => {
  return (
    <div>
      <ul>
        {languages.map((language) => {
          return <li key={language.name}>{language.name}</li>
        })}
      </ul>
    </div>
  )
}

export default LanguagesList
