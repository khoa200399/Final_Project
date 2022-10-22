import { UserOutlined } from "@ant-design/icons";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name = "") {
  if (name)
    return {
      style: {
        backgroundColor: stringToColor(name),
      },
      children: name.split(" ")[1]
        ? `${name.split(" ")[0][0]?.toUpperCase()}${name
            .split(" ")[1][0]
            .toUpperCase()}`
        : `${name.split(" ")[0][0]?.toUpperCase()}`,
    };
  return {
    icon: <UserOutlined className="text-[28px] !bg-[#6b6b6b]" />,
    style: {
      backgroundColor: `#6b6b6b`,
    },
  };
}
