import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const APIkey = "db30d5ba2b96408cb9444455230905 ";

const initialState = {
    cities: [],
    status: 'idle',
    error: null,
    data: null
}

export const fetchWeather = createAsyncThunk('city/fetchWeather', async (city) => {
    const firstResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${city}&days=3&aqi=yes&alerts=no`);
    const firstData = await firstResponse.json();
    console.log(firstData);
    return firstData;

});

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        addCity: {
            reducer(state, action) {
                state.cities.push(action.payload)
            },
            prepare(city) {
                return {
                    payload: {
                        id: nanoid(),
                        name: city
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchWeather.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
})
export const selectAllCities = state => state.city.cities;
export const selectCityData = state => state.city.data;
export const { addCity } = citySlice.actions;
export default citySlice.reducer;