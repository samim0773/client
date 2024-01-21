import "./Management.css";

const Management = () => {
  const managementData = [
    {
      name: "Mr. John Doe",
      role: "Principal",
      image:
        "https://images.pexels.com/photos/5415450/pexels-photo-5415450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "As the Principal, Mr. John Doe provides visionary leadership and strategic direction to ensure the overall academic and administrative excellence of the institute. He is responsible for fostering a positive learning environment and implementing policies that contribute to the growth and development of both students and staff.",
    },
    {
      name: "Ms. Alice Smith",
      role: "Vice Principal",
      image:
        "https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Ms. Alice Smith, in her role as Vice Principal, works closely with the Principal in overseeing day-to-day operations. She plays a key role in curriculum development, student welfare, and maintaining a supportive school culture. Ms. Smith actively contributes to initiatives aimed at enhancing the educational experience.",
    },
    {
      name: "Mr. Robert Johnson",
      role: "Headmaster",
      image:
        "https://images.pexels.com/photos/8617757/pexels-photo-8617757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Mr. Robert Johnson serves as the Headmaster, focusing on academic leadership and student achievement. He collaborates with teachers to implement effective teaching strategies, oversees curriculum planning, and ensures the delivery of quality education. Mr. Johnson is dedicated to creating an atmosphere that fosters both intellectual and personal growth.",
    },
    {
      name: "Ms. Emily Brown",
      role: "Administrator",
      image:
        "https://images.pexels.com/photos/6325952/pexels-photo-6325952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "As the Administrator, Ms. Emily Brown manages the institute's administrative functions. She is responsible for coordinating various aspects such as admissions, facilities management, and communication. Ms. Brown plays a vital role in streamlining processes and ensuring efficient day-to-day operations.",
    },
    // Add more management members with their details
  ];

  return (
    <div className="management-team-container container">
      <h2>Management Team</h2>

      {managementData.map((member, index) => (
        <div className="management-member" key={index}>
          <img
            className="mange-img"
            src={member.image}
            alt={`${member.name} - ${member.role}`}
          />
          <div className="member-details">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p className="role-description">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Management;
