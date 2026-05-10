import Bug from "./Bug";
import ErrorBoundary from "./ErrorBund";
import CountBund from './CountBoundary'

export default function App() {
  return (
    <div>
      <h1>Main Page</h1>

      <ErrorBoundary>
        <Bug />
      </ErrorBoundary>
    </div>
  );
}
// Error Boundary არის React-ის სპეციალური კომპონენტი,
// რომელიც იჭერს (catch) შეცდომებს შვილობილ კომპონენტებში.
//
// თუ რომელიმე child component დაკრაშდება,
// მთლიანი აპლიკაციის გათიშვის ნაცვლად,
// Error Boundary აჩვენებს fallback UI-ს
// მაგალითად: "რაღაც შეფერხდა".
//
// Error Boundary მუშაობს მხოლოდ class component-ში.


// რომ აპლიკაცია მთლიანად არ დაკრაშდეს
//  მომხმარებელმა ნახოს ნორმალური შეტყობინება
//  მარტივად ვიპოვოთ error-ები
//  უკეთესი User Experience-ისთვის
// დიდი პროექტების სტაბილურობისთვის