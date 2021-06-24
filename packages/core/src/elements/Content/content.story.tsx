/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Content from '.';

storiesOf('elements/Content', module)
  .add('default', () => (
    <Content>
      <h1>Hello World!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
        metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
      </p>
      <h2>Second Header</h2>
      <p>
        Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque condimentum maximus mi,
        sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis.
        Suspendisse potenti. Etiam mattis sem rhoncus
        lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
      </p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
      </ul>
      <h3>Third Header</h3>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Column1</th>
            <th>Column2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lorem</td>
            <td>ipsum</td>
          </tr>
          <tr>
            <td>2</td>
            <td>dolor</td>
            <td>sit</td>
          </tr>
          <tr>
            <td>3</td>
            <td>consectetur</td>
            <td>adipiscing</td>
          </tr>
        </tbody>
      </table>
    </Content>
  ))
  .add('japanese', () => (
    <Content>
      <h1>ダミー文章タイトル</h1>
      <p>
        あなたは今けっしてどんな反抗方といった事のために云っですまい。
        けっして今で承諾方はかつてそのお話たましでもが気がつきてならますがもお話しありしと、
        わざわざにはしなないたん。朋党を云っないのはたしか時間に要するにたでなら。
        しきりに大森さんへ意味モーニング別段関係にします次その左ここか推察がにおいてお相違だなだますて、
        この場合はそれか巡査世の中に思わて、
        久原さんののを域のあなたへざっとご不足と聞いがそこ道でご運動を勧めように正しくご煩悶になっならたが、
        ようやくけっして相当をあるないてならうのが作るなかっで。
      </p>
      <h2>タイトル２</h2>
      <p>
        もっともまた実学校をあるのはこう十分と立ったが、
        どんなmanがはしたらばという貧民をししやっなけれな。
        こういう後西洋のところその文学はあなた末でやったかと大森さんからありでない、
        人真似の場合ですという実失敗らしいたたて、個人の時が味で晩などの理由が事実行くてならば、
        そうの今日をなろてそのためによくありがたがっなですと潜んですのなかろて、ないないないて突然ご教師あっますものたありあり。
      </p>
      <ul>
        <li>
          そこでお尊敬が知れてもいないのませて、文芸とは、とうとう私か叱るで去っれたうさられましなかっとできが、
          ベンチは擡げし下さっですます。よしはたしてはとうてい弟といういなば、どこがは毎日上だけそれのご矛盾はわるくしやっただ。
        </li>
        <li>
          それはぷんぷん学問のはずからお啓発は忘れながら得るたでしなかっうば、三三の故意にまだしませとかいう指導んて
        </li>
        <li>
          またその通りの文字にしれから、私かを何の時代に誤解から云わていたのましますと教育もっのに供含まっんない。
        </li>
      </ul>
      <h3>タイトル3</h3>
      <table>
        <thead>
          <tr>
            <th>例</th>
            <th>カラム</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>張さんは</td>
            <td>多少学者</td>
          </tr>
          <tr>
            <td>2</td>
            <td>自信</td>
            <td>文部省の科学までして行なわと</td>
          </tr>
        </tbody>
      </table>
    </Content>
  ));
