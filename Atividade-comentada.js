

// Script : Comente linha a linha ( Ou pode ser em Bloco ) e desenhe do que se retrata.
  Atividade 01
 
insert(element, index) { // ( Y , X) Valor da posição
    if (index >= 0 && index <= this.count) { // Verifica se é maior que zero e menor que o tamanho da lista
      const node = new DoublyNode(element); // Cria um novo nó 
      let current = this.head; //  Variavel para indicar o inicio da lista
      if (index === 0) { // Se o indice for a posição 0  
        if (this.head == null) { // Verifica se existe um nó na cabeça, se nao tiver ...
          this.head = node; //  Quanto a cabeça vira seu nó
          this.tail = node; //  A sua cauda vira seu nó;

        } else { // se tiver  ...
          node.next = this.head; // O seu next vai apontar para a cabeça
          this.head.prev = node; // A o prev (anterior) da cabeça vai apontar para o seu nó
          this.head = node; // O seu nó vira a  cabeça .
        } 
      } else if (index === this.count) { // Se a posição do index for igual a o tamanho da lista ( Contagem - a calda ) ...
        current = this.tail; //  a ultima posição vira current
        current.next = node; // o next aponta pro sei nó
        node.prev = current; // o prev do seu nó aponta pro prev do nó
        this.tail = node; // current e nó vira a calda.

      } else { //  E se estiver entre a cabeça e a calda ...
        const previous = this.getElementAt(index - 1); // Variavel que ira assumir o previous (anterior ao nó)
        current = previous.next; // Varriavel que ira assumir o current ( depois do previous)
        node.next = current; // Next do seu nó aponta pro current
        previous.next = node; // Next do previous aponta pro nó
        current.prev = node; // Prev do current aponta pro nó
        node.prev = previous; // E o prev do nó se torna previous.
      }
      this.count++; //  Soma +1 no tamanho da lista
      return true; // retorna se dor verdade
    }
    return false; // Retorna se for  falso ( O que é ser falso? o valor da posição seja invalida )
  }


  Atividade 02 -  removeAt

  removeAt(index) { // Inserir o índice que quer que seja removido
    if (index >= 0 && index < this.count) { // Caso o índice seja maior que 0 e menor que o tamanho da lista
      let current = this.head; // Variavel para saber o início da lista
      
      if (index === 0) {
        this.head = this.head.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      //  O que aconteceu no "if" anterior? 
      // Se o índice seja igual a 0, a cabeça agora se torna o next da cabeça anterior. 
      // Caso o tamanho da lista seja 1 o cauda aponta para indefinido, 
      // se houver mais de 1 item o previous da cabeça aponta para indefinido.

      } else if (index === this.count - 1) { 
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;

      //  O que aconteceu no "else if" anterior? 
      //  Se o índice seja o ultimo valor da lista, a variavel assume o valor da cauda ...
      // e a cauda se torna o previous dessa variável, e seu next aponta para indefinido

      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous; 
      }
      //  O que aconteceu no "else if" anterior? 
      // Se o índice seja algum valor no meio da lista a variável current assume o índice, 
      // criasse outra variável nomeada de previous que assume o valor prev do current, 
      // o next do previous se torna o next do current e o prev do current.next se torna o previous.

      this.count--;
      return current.element;
    }
    return undefined;
  }