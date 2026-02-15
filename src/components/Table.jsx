import React, { useEffect, useState } from "react";

function Table() {
  const [userList, setUserList] = useState([]);

  const getUserData = async () => {
    try {
      const uData = await fetch("https://jsonplaceholder.typicode.com/users");
      const uDataToJson = await uData.json();
      setUserList(uDataToJson);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {userList.length > 0 &&
              Object.keys(userList[0]).map((h) => {
                return <th key={`${h}`}>{h}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 &&
            userList.map((u) => {
              return (
                <tr key={u.id}>
                  {Object.entries(u).map(([key, value]) => {
                    return (
                      <td key={`${u.id}-${key}`}>
                        {typeof value === "object"
                          ? JSON.stringify(value)
                          : value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
