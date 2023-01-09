# vuejs/core
A simple npx package to output lorem ipsum string to the command line.

## Usage
Simply run `npx x-lorem` on your terminal to output a lorem ipsum string.

```bash
npx x-lorem

# Output
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus a odio eu imperdiet. Morbi auctor fringilla sollicitudin. Fusce id nisl urna. Quisque tristique odio et molestie semper. Maecenas sagittis justo mauris, id commodo nunc commodo nec. Nullam suscipit tempus velit, sit amet feugiat sem tincidunt sed. 
```

A variety of options is available to modify the output, including setting letter capitalization and desired length. These options are described below.

| Option        | type     | description |
| ------------- | -------- | ----------- |
| --chars       | number   | Output a set number of characters, up to a max of 75000. |
| --words       | number   | Output a set number of words, up to a max of 10000. Takes precedence over characters count. |
| --paragraphs  | number   | Output a set number of paragraphs, up to a max of 150. Takes precedence over character and word counts. |
| --lowercase   | boolean  | Converts the output to lowercase. |
| --capitalize  | boolean  | Capitalize the first letter of each word on the output. Takes precedence over lowercase. |
| --randomcase  | boolean  | Randomizes the case of each letter on the output. Takes precedence over capitalization and lowercase. |
| --uppercase   | boolean  | Converts the output to uppercase. Takes precedence of other letter cases. |
| --spaced   | boolean  | Adds newline spaces between paragraphs on the output. Becomes evident only if you use a high enough character or word count. Notice that newlines count for the character length. Always active when using the `--paragraphs` option. |

Notice the precedence rules described above. Using multiple concurrent flags will cause the one with highest precedence to be used. For example, using `lorem --uppercase --lowercase` will result in an uppercase output.

### Examples

- Outputting a character length:
  ```bash
  npx x-lorem --chars 15

  # Output
  Lorem ipsum dol
  ```

  - Outputting a word count:
  ```bash
  npx x-lorem --words 5

  # Output
  Lorem ipsum dolor sit amet,
  ```

- Outputting a paragraph count:
  ```bash
  npx x-lorem --paragraphs 2

  # Output
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus a odio eu imperdiet. Morbi auctor fringilla sollicitudin. Fusce id nisl urna. Quisque tristique odio et molestie semper. Maecenas sagittis justo mauris, id commodo nunc commodo nec. Nullam suscipit tempus velit, sit amet feugiat sem tincidunt sed. Cras et condimentum turpis. Duis congue eleifend nibh, non condimentum odio elementum at. Maecenas laoreet tellus eget mollis sodales. Mauris sed hendrerit elit. In blandit nunc arcu, at blandit ipsum gravida sit amet.

  Vivamus dignissim ante aliquam, tempor orci eget, tristique sem. Nam vel mauris et magna volutpat maximus. Curabitur sagittis mi sed efficitur pellentesque. Nunc nec dolor quis lorem convallis sagittis a et purus. Nunc nec fermentum lectus. Pellentesque facilisis elementum congue. Sed tristique lobortis dui, a volutpat massa facilisis ultricies. Donec sit amet leo luctus, fringilla augue vel, pharetra urna. In hac habitasse platea dictumst. Phasellus interdum nibh sem, ac feugiat dui euismod nec. In tristique nulla eu diam porttitor vestibulum a vel ex. Sed euismod, magna vitae imperdiet aliquet, enim tortor dignissim purus, at finibus ligula mauris ac metus. Vestibulum volutpat eget justo quis vestibulum. Suspendisse tristique nisl ac ex pharetra accumsan.
  ```

- Lowercase output
  ```bash
  npx x-lorem --chars 100 --lowercase

  # Output
  lorem ipsum dolor sit amet, consectetur adipiscing elit. in maximus a odio eu imperdiet. morbi aucto
  ```

- Uppercase output
  ```bash
  npx x-lorem --chars 100 --upercase

  # Output
  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. IN MAXIMUS A ODIO EU IMPERDIET. MORBI AUCTO
  ```

- Random case output
  ```bash
  npx x-lorem --chars 100 --randomcase

  # Output
  loREM IPsum DOLor sit AmEt, CONsecTetur ADIpISCIng elIt. IN maXiMUS A ODiO Eu impERdIEt. MoRbI AuctO
  ```

- Capitalized output
  ```bash
  npx x-lorem --chars 100 --capitalize

  # Output
  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. In Maximus A Odio Eu Imperdiet. Morbi Aucto
  ```

- Spaced vs non-spaced output. Notice the newlines count for the character count:
  ```bash
  npx x-lorem --chars 1000 --spaced

  # Output
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus a odio eu imperdiet. Morbi auctor fringilla sollicitudin. Fusce id nisl urna. Quisque tristique odio et molestie semper. Maecenas sagittis justo mauris, id commodo nunc commodo nec. Nullam suscipit tempus velit, sit amet feugiat sem tincidunt sed. Cras et condimentum turpis. Duis congue eleifend nibh, non condimentum odio elementum at. Maecenas laoreet tellus eget mollis sodales. Mauris sed hendrerit elit. In blandit nunc arcu, at blandit ipsum gravida sit amet.

  Vivamus dignissim ante aliquam, tempor orci eget, tristique sem. Nam vel mauris et magna volutpat maximus. Curabitur sagittis mi sed efficitur pellentesque. Nunc nec dolor quis lorem convallis sagittis a et purus. Nunc nec fermentum lectus. Pellentesque facilisis elementum congue. Sed tristique lobortis dui, a volutpat massa facilisis ultricies. Donec sit amet leo luctus, fringilla augue vel, pharetra urna. In hac habitasse platea dictumst. Phasellus interdum  


  npx x-lorem --chars 1000

  # Output
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus a odio eu imperdiet. Morbi auctor fringilla sollicitudin. Fusce id nisl urna. Quisque tristique odio et molestie semper. Maecenas sagittis justo mauris, id commodo nunc commodo nec. Nullam suscipit tempus velit, sit amet feugiat sem tincidunt sed. Cras et condimentum turpis. Duis congue eleifend nibh, non condimentum odio elementum at. Maecenas laoreet tellus eget mollis sodales. Mauris sed hendrerit elit. In blandit nunc arcu, at blandit ipsum gravida sit amet. Vivamus dignissim ante aliquam, tempor orci eget, tristique sem. Nam vel mauris et magna volutpat maximus. Curabitur sagittis mi sed efficitur pellentesque. Nunc nec dolor quis lorem convallis sagittis a et purus. Nunc nec fermentum lectus. Pellentesque facilisis elementum congue. Sed tristique lobortis dui, a volutpat massa facilisis ultricies. Donec sit amet leo luctus, fringilla augue vel, pharetra urna. In hac habitasse platea dictumst. Phasellus interdum n 
  ```

- Precedence examples:
  ```bash
  npx x-lorem --chars 250 --words 5

  # Output
  Vivamus dignissim ante aliquam, tempor 


  npx x-lorem --words 10 --capitalize --lowercase

  # Output
  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. In Maximus 

  
  ```
