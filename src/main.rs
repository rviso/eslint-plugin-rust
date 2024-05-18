fn main() {
  let unused_variable = 42; // 这是一个未使用的变量，clippy 会对其发出警告

  let a: &str = "hello"; // 这是一个不推荐的类型声明，clippy 会建议改进

  let numbers = vec![1, 2, 3, 4, 5];
  for i in 0..numbers.len() {
    println!("{}", numbers[i]); // 这是一个不推荐的迭代方式，clippy 会建议改进
  }

  if let Some(value) = Some(5) {
    println!("Value is: {}", value);
  } else {
    println!("No value found");
  }

  // 一个包含不必要的克隆操作的例子
  let s = "hello".to_string();
  let _t = s.clone();
  println!("{}", s);
}
