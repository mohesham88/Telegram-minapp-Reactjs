// simple database of the images the app needs
import barca from '../images/barca-kit.png'
import realmadrid from '../images/real-madrid-kit.png'
import dortmund from '../images/dortmunt-kit.png'
import manu from '../images/manu-kit.png'
import arsenal from '../images/arsenal-kit.png'

function getData(){
  return [
    {
      title : "Real Madrid",
      price : 90,
      Image : realmadrid,
    },
    {
      title : "Arsenal",
      price : 30,
      Image : arsenal,
    },
    {
      title : "Barca",
      price : 10,
      Image : barca,
    },
    {
      title : "Manchester united",
      price : 50,
      Image : manu,
    },
    {
      title : "Dortmunt",
      price : 120,
      Image : dortmund,
    },
  ]
}

export default getData;