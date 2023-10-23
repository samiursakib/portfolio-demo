const ProjectTab = ({ tab, isSelected, onClick }) => {
  return (
    <button className={`${isSelected ? "border-white text-white" : "border-[#ADB7BE] text-[#ADB7BE]"} text-sm px-5 py-1 border rounded-full cursor-pointer`} onClick={onClick}>{tab}</button>
  );
}

export default ProjectTab;