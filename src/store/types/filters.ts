export interface FilterOption {
    _id:string
    type:string
    state:boolean
}
export interface Filter {
    category:string
    name:string
    items:Array<FilterOption>
}
export interface ActiveFilter {
    category:string
    optionId:string
    type:string
}
export interface RangeFilter {
    domain:[number, number]
    fieldState:[string|number, string|number]
    name:string
    sliderState:[string|number, string|number]
}