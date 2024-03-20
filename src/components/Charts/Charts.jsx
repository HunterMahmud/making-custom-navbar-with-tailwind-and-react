import { AreaChart, LineChart, Line, XAxis, YAxis, Tooltip,CartesianGrid, Area } from "recharts";
const Charts = () => {
    const students = [
        { name: "Emily Johnson", math: 95, science: 90, english: 88 }, // Good student
        { name: "Michael Smith", math: 65, science: 70, english: 76 }, // Bad student
        { name: "Sophia Brown", math: 92, science: 95, english: 84 }, // Good student
        { name: "Jacob Lee", math: 60, science: 55, english: 62 }, // Bad student
        { name: "Emma Martinez", math: 88, science: 85, english: 90 }, // Good student
        { name: "William Taylor", math: 100, science: 98, english: 79 }, // Good student
        { name: "Olivia", math: 75, science: 80, english: 86 }, // Bad student
        { name: "Alexander Nguyen", math: 90, science: 88, english: 92 }, // Good student
        { name: "Ava Kim", math: 70, science: 65, english: 81 }, // Bad student
        { name: "Ethan Lopez", math: 83, science: 82, english: 85 } // Good student
    ];
    

  return (
    <>
      <div className="flex flex-col">
        <LineChart width={1200} height={400} data={students}>
          <Line type="monotone" dataKey="math" stroke="#8884d8" />
          <Line type="monotone" dataKey="science" stroke="green" />
          <Line type="monotone" dataKey="english" stroke="black" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <div className="bg-green-500 mx-auto flex flex-col">
        <AreaChart
          width={1200}
          height={550}
          data={students}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorMath" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorScience" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorEnglish" x1="0" y1="0" x2="0" y2="1">
              <stop offset="6%" stopColor="purple" stopOpacity={0.8} />
              <stop offset="100%" stopColor="red" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="math"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorMath)"
          />
          <Area
            type="monotone"
            dataKey="science"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorScience)"
          />
          <Area
            type="monotone"
            dataKey="english"
            stroke="#black"
            fillOpacity={1}
            fill="url(#colorEnglish)"
          />
        </AreaChart>
      </div>
    </>
  );
};

export default Charts;
