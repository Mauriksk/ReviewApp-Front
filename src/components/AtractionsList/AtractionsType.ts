export interface Atracctions {
    business_status:       BusinessStatus;
    formatted_address:     string;
    geometry:              Geometry;
    icon:                  string;
    icon_background_color: IconBackgroundColor;
    icon_mask_base_uri:    string;
    name:                  string;
    opening_hours?:        OpeningHours;
    photos:                Photo[];
    place_id:              string;
    plus_code:             PlusCode;
    rating:                number;
    reference:             string;
    types:                 string[];
    user_ratings_total:    number;
    imageUrl: string;
}

export enum BusinessStatus {
    Operational = "OPERATIONAL",
}

export interface Geometry {
    location: Location;
    viewport: Viewport;
}

export interface Location {
    lat: number;
    lng: number;
}

export interface Viewport {
    northeast: Location;
    southwest: Location;
}

export enum IconBackgroundColor {
    The13B5C7 = "#13B5C7",
    The4Db546 = "#4DB546",
    The7B9Eb0 = "#7B9EB0",
}

export interface OpeningHours {
    open_now: boolean;
}

export interface Photo {
    height:            number;
    html_attributions: string[];
    photo_reference:   string;
    width:             number;
}

export interface PlusCode {
    compound_code: string;
    global_code:   string;
}