export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          // the data expected from .select()
          id: string;
          username: string;
          text: string;
          data: Json | null;
        };
        Insert: {
          // the data to be passed to .insert()
          id?: never; // generated columns must not be supplied
          username?: string; // `not null` columns with no default must be supplied
          text: string; // `not null` columns with no default must be supplied
          data?: Json | null; // nullable columns can be omitted
        };
      };
    };
  };
}

export interface Chat {
  id: string;
  username: string;
  text: string;
  created_at: string;
}
