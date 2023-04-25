import {create} from 'zustand'

export const useLightsStore = create((set, get) => ({
    lights: [
        { name: "Living Room", isOn: false, id: 1 },
        { name: "Kitchen", isOn: false, id: 2 },
        { name: "Bedroom", isOn: false, id: 3 },
        { name: "Bathroom", isOn: true, id: 4 },
        { name: "Garage", isOn: false, id: 5 },
        { name: "Porch", isOn: true, id: 6 },
        { name: "Garden", isOn: false, id: 7 },
        { name: "Office", isOn: false, id: 8 },
    ], 

    onToggle: (lightId) => 
        set((state) => ({
            lights: state.lights.map((light) => 
                light.id === lightId ? { ...light, isOn: !light.isOn } : light
            ),
        })),
    
    turnAllOn: () =>
        set((state)=>({
            lights: state.lights.map((light)=>({...light, isOn: true}))
        })),

    turnAllOff: () =>
        set((state)=>({
            lights: state.lights.map((light)=>({...light, isOn: false}))
        })),

    turnOnAmount: () =>
        get().lights.filter((light) => light.isOn).length,
}))