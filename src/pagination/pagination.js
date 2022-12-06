import { sliderdb } from "../sliderdb";



export const pagination = {
       getData: ({from,to}) => {
              return new Promise((resolve, reject) => {

                     const data = sliderdb.slice(from,to);

                     resolve({
                            count: sliderdb.length,
                            data: data
                     })
              })
       }
}