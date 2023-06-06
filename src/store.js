import { reactive } from 'vue'

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",
    ListCard: [],
    loading: true,
    searchText: "",
    apiParameter: "archetype",
    ListArchetype: [],
    apiArchetypeURL: "https://db.ygoprodeck.com/api/v7/archetypes.php"
});