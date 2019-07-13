import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @Prop({reflectToAttr: true}) title: string;
  @Prop({reflectToAttr: true, mutable: true}) open: boolean;

  onCloseDrawer() {
    this.open = false;
  }

  render() {
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button class="active">Navigation</button>
          <button>Contact</button>
        </section>
        <main>
          <slot></slot>
        </main>
      </aside>
    );
  }
}









// ==================================================
// One possible way of opening and closing the drawer: 

// render() {
//   let content = null;
//   if (this.open) {
//     content = (
//       <aside>
//         <header><h1>{this.title}</h1></header>
//         <main>
//           <slot></slot>
//         </main>
//       </aside>
//     );
//   }
//   return content;

// }
// ==================================================
