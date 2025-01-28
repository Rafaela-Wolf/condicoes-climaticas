import { SearchBar, SearchButton, SearchInput } from "./SearchStyles";

const Search = ({ cidade, setCidade, buscarClima }) => {
  return (
    <SearchBar>
      <SearchInput
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade..."
      />
      <SearchButton onClick={buscarClima}>Buscar</SearchButton>
    </SearchBar>
  )
}

export default Search;