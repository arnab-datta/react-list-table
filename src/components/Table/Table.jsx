import React, { useEffect, useState, useRef } from "react";

function Table() {
  const [userList, setUserList] = useState([]);
  const hasFetched = useRef(false);

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
    if (hasFetched.current) return;
    getUserData();
    hasFetched.current = true;
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
