const styles = {
    // Container with 11/12 width, hidden by default, visible on small screens and larger
    custom_container: "w-11/12 hidden sm:block",
    
    // Heading with 27px text size, center-aligned by default, left-aligned on medium screens, bold font weight, Roboto font, and 20px bottom padding
    heading: 'text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]',
    
    // Section with 11/12 width and auto horizontal margin
    section: 'w-11/12 mx-auto',
    
    // Product title with 25px text size, bold font weight, Roboto font, and dark text color
    productTitle: 'text-[25px] font-[600] font-Roboto text-[#333]',
    
    // Product discount price with bold font, 18px text size, dark text color, and Roboto font
    productDiscountPrice: "font-bold text-[18px] text-[#333] font-Roboto",
    
    // Original price with medium font weight, 16px text size, red color, 3px left padding, -4px top margin, and strikethrough style
    price: "font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through",
    
    // Shop name with 15px text size, blue color, and 3px padding at the top and bottom
    shop_name: "pt-3 text-[15px] text-blue-400 pb-3",
    
    // Active indicator with absolute positioning, 27% bottom offset, left aligned, 3px height, full width, and crimson background color
    active_indicator: "absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]",
    
    // Button with 150px width, black background, 50px height, 3px vertical margin, centered content, rounded corners, and cursor pointer
    button: 'w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer',
    
    // Cart button with 20px horizontal padding, 38px height, 20px rounded corners, red background, centered content, and cursor pointer
    cart_button: "px-[20px] h-[38px] rounded-[20px] bg-[#f63b60] flex items-center justify-center cursor-pointer",
    
    // Cart button text with white color, 16px text size, and bold font weight
    cart_button_text: "text-[#fff] text-[16px] font-[600]",
    
    // Input field with full width, border, 1px padding, and 5px rounded corners
    input: "w-full border p-1 rounded-[5px]",
    
    // Active status indicator with 10px width and height, full circle, absolute positioning, top-right aligned, and green background
    activeStatus: "w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#40d132]",
    
    // Flex container with center-aligned items
    noramlFlex: "flex items-center"
  };
  
  export default styles;
  