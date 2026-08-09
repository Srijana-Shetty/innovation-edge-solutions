import academic from "@/assets/academic-books.jpg";
import story from "@/assets/story-books.jpg";
import activity from "@/assets/activity.jpg";
import steam from "@/assets/steam.jpg";
import competitive from "@/assets/competitive.jpg";
import stationery from "@/assets/stationery.jpg";
import schoolSupplies from "@/assets/school-supplies.jpg";
import printing from "@/assets/printing.jpg";
import bookfair from "@/assets/bookfair.jpg";
import exhibition from "@/assets/exhibition.jpg";
import library from "@/assets/library.jpg";

export const IMAGES = {
  academic,
  story,
  activity,
  steam,
  competitive,
  stationery,
  schoolSupplies,
  printing,
  bookfair,
  exhibition,
  library,
};

export type Offering = {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  to: string;
  group: "Books & Resources" | "Supplies" | "Services" | "Institutional";
};

export const OFFERINGS: Offering[] = [
  {
    title: "Academic Books",
    description:
      "Curriculum-aligned textbooks and reference titles for every stage of school learning.",
    image: academic,
    alt: "Stack of academic textbooks beside a globe on a study desk",
    icon: "BookOpen",
    to: "/products",
    group: "Books & Resources",
  },
  {
    title: "Story Books",
    description:
      "Age-appropriate story titles that build reading habits, vocabulary and imagination.",
    image: story,
    alt: "Colourful children's story books open on a table",
    icon: "BookMarked",
    to: "/products",
    group: "Books & Resources",
  },
  {
    title: "Activity Books",
    description:
      "Practice and activity workbooks that turn classroom concepts into hands-on learning.",
    image: activity,
    alt: "Children colouring activity worksheets at a classroom table",
    icon: "PencilRuler",
    to: "/products",
    group: "Books & Resources",
  },
  {
    title: "STEAM Resources",
    description:
      "Science, technology, engineering, arts and mathematics kits and learning material.",
    image: steam,
    alt: "Students exploring a robotics kit and microscope in a school lab",
    icon: "FlaskConical",
    to: "/solutions",
    group: "Books & Resources",
  },
  {
    title: "Competitive Books",
    description:
      "Preparation material and reference resources for competitive and entrance examinations.",
    image: competitive,
    alt: "Student preparing for competitive exams with reference books",
    icon: "Target",
    to: "/products",
    group: "Books & Resources",
  },
  {
    title: "Office Supplies",
    description:
      "Everyday consumables and office essentials for administrative and staff requirements.",
    image: stationery,
    alt: "Office stationery items arranged on a light surface",
    icon: "Briefcase",
    to: "/products",
    group: "Supplies",
  },
  {
    title: "School Supplies",
    description:
      "Classroom and student essentials supplied in individual or institutional quantities.",
    image: schoolSupplies,
    alt: "Shelves of school supplies, notebooks and bags in a store",
    icon: "Backpack",
    to: "/products",
    group: "Supplies",
  },
  {
    title: "Stationery",
    description:
      "A wide range of writing, drawing and paper stationery for students and offices.",
    image: stationery,
    alt: "Notebooks, pens and geometry items laid out neatly",
    icon: "Pen",
    to: "/products",
    group: "Supplies",
  },
  {
    title: "Printing",
    description:
      "Printing support for school, academic and office documentation requirements.",
    image: printing,
    alt: "Professional printing machines in a bright print centre",
    icon: "Printer",
    to: "/services",
    group: "Services",
  },
  {
    title: "Xerox Services",
    description:
      "Photocopying and duplication services for everyday academic and office needs.",
    image: printing,
    alt: "Copier machines producing printed documents",
    icon: "Copy",
    to: "/services",
    group: "Services",
  },
  {
    title: "Book Fairs",
    description:
      "On-campus book fairs that put curated titles directly in front of students.",
    image: bookfair,
    alt: "Students browsing books at a school book fair",
    icon: "Store",
    to: "/book-fairs",
    group: "Institutional",
  },
  {
    title: "School Exhibitions",
    description:
      "Support for school exhibitions and educational events with resources and displays.",
    image: exhibition,
    alt: "Students presenting project models at a school exhibition",
    icon: "Presentation",
    to: "/book-fairs",
    group: "Institutional",
  },
  {
    title: "Library Setup",
    description:
      "Book selection and organisation support to help institutions build better libraries.",
    image: library,
    alt: "Modern school library with tall shelves and reading tables",
    icon: "Library",
    to: "/library-setup",
    group: "Institutional",
  },
];
