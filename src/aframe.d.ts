import "react"
import { jsx } from "react/jsx-runtime";
declare module "react"{
    namespace jsx{
        interface IntrinsicElements {
            [e:string]:any;
        }
    }
}