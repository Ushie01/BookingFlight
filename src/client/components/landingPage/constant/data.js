import ActivitiesIcon from "../../../share/svg/Activities";
import AirplaneIcon from "../../../share/svg/Airplane";
import BaggagesIcon from "../../../share/svg/Baggages";
import FlightMealIcon from "../../../share/svg/FlightMeal";
import HotelsIcon from "../../../share/svg/Hotels";
import ImmigrationIcon from "../../../share/svg/Immigration";
import MedicalIcon from "../../../share/svg/Medical";
import StudyIcon from "../../../share/svg/Study";
import USBportIcon from "../../../share/svg/USBport";
import VisaIcon from "../../../share/svg/Visa";
import VocationPackageIcon from "../../../share/svg/VocationPackage";

export const SIDERBAR_LINKS = [
  { name: "Activities", icon: ActivitiesIcon },
  { name: "Hotels", icon: HotelsIcon },
  { name: "Flights", icon: AirplaneIcon },
  { name: "Study", icon: StudyIcon },
  { name: "Visa", icon: VisaIcon },
  { name: "Immigration", icon: ImmigrationIcon },
  { name: "Medical", icon: MedicalIcon },
  { name: "Vacation Package", icon: VocationPackageIcon },
];

export const FAMILY_TRIP_DATA = [
  {
    title: "Activities",
    text: "Build, personalize, and optimize your itineraries with our trip planner.",
    buttonText: "Add Activities",
    bgColor: "bg-[#000031]",
  },
  {
    title: "Hotels",
    text: "Build, personalize, and optimize your itineraries with our trip planner.",
    buttonText: "Add Hotels",
    bgColor: "bg-[#E7F0FF]",
  },
  {
    title: "Flights",
    text: "Build, personalize, and optimize your itineraries with our trip planner.",
    buttonText: "Add Flights",
    bgColor: "bg-[#0D6EFD]",
  },
];

export const FLIGTHS_DATA = [
  {
    title: "Baggage: 20kg, Cabin Baggage: 8kg",
    icon: <BaggagesIcon />,
  },
  {
    title: "In flight entertainment",
    icon: <FlightMealIcon />,
  },
  {
    title: "In flight meal",
    icon: <FlightMealIcon />
  },
  {
    title: "USB Port",
    icon: <USBportIcon />
  }
];
