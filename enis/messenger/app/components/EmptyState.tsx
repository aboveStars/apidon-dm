const EmptyState = () => {
  return ( 
    <div 
      className="
        px-4 
        py-10 
        sm:px-6 
        lg:px-8 
        lg:py-6 
        h-full 
        flex 
        border-l-[2px]
        border-gray-800
        justify-center 
        items-center 
        bg-gray-950
      "
    >
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-cyan-400">
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
}
 
export default EmptyState;
