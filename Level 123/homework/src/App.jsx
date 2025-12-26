export default function App() {
  return (
    <div>

      <div className="height: 550px;
            width: 300px;
            background-color: hsl(0, 0%, 20%);
            border-radius: 10px;
            text-align: center;
            padding: 20px;">

        <h1 className="color: hsl(0, 0%, 100%)">John Doe</h1>
        <h3 className='color: hsl(75, 94%, 57%);'>New York, United States</h3>
        <h4 className="color: hsl(0, 0%, 100%);">"Full-stack developer and tech enthusiast."</h4>

        <div className="display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 20px;">

          <div className="">GitHub</div>
          <div className="">Frontend Mentor</div>
          <div className="">LinkedIn</div>
          <div className="">Twitter</div>
          <div className="">Instagram</div>
        </div>
      </div>

    </div>
  )
}